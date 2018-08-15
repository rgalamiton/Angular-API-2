using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class BillboardModelsController : ApiController
    {
        private WebApiContext db = new WebApiContext();

        // GET: api/BillboardModels
        public IQueryable<BillboardModel> GetBillboardModels()
        {
            return db.BillboardModels;
        }
/*
        // GET: api/BillboardModels/5
        [ResponseType(typeof(BillboardModel))]
        public IHttpActionResult GetBillboardModel(int id)
        {
            BillboardModel billboardModel = db.BillboardModels.Find(id);
            if (billboardModel == null)
            {
                return NotFound();
            }

            return Ok(billboardModel);
        }*/

        // PUT: api/BillboardModels/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBillboardModel(int id, BillboardModel billboardModel)
        { 

            if (id != billboardModel.id)
            {
                return BadRequest();
            }

            db.Entry(billboardModel).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillboardModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BillboardModels
        [ResponseType(typeof(BillboardModel))]
        public IHttpActionResult PostBillboardModel(BillboardModel billboardModel)
        {

            db.BillboardModels.Add(billboardModel);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = billboardModel.id }, billboardModel);
        }

        // DELETE: api/BillboardModels/5
        [ResponseType(typeof(BillboardModel))]
        public IHttpActionResult DeleteBillboardModel(int id)
        {
            BillboardModel billboardModel = db.BillboardModels.Find(id);
            if (billboardModel == null)
            {
                return NotFound();
            }

            db.BillboardModels.Remove(billboardModel);
            db.SaveChanges();

            return Ok(billboardModel);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BillboardModelExists(int id)
        {
            return db.BillboardModels.Count(e => e.id == id) > 0;
        }
    }
}