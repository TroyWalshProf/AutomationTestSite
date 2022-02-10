using AutomationTestSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace AutomationTestSite.Controllers
{
    public class XML_JSONController : ApiController
    {
        Product[] products = new Product[] 
        { 
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 }, 
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M }, 
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M } 
        };
        // GET /api/XML_JSON/GetAllProducts
        /// <summary>
        /// Gets all the products
        /// </summary>
        /// <returns>A string of all products<see cref="Product"/></returns>
        public IHttpActionResult GetAllProducts()
        {
            if (products.Length < 1)
            {
                return NotFound();
            }

            return Ok(products);
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        public IHttpActionResult Delete(int id)
        {
            IHttpActionResult response = null;

            response = ResponseMessage(new HttpResponseMessage(HttpStatusCode.OK));

            if (id > 1)
            {
                IEnumerable<string> values;

                // Check the header for the security override first, only return a conflict if they don't have the override
                if (!Request.Headers.TryGetValues("pass", out values) || !values.First().Equals("word"))
                { 
                    response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Conflict, "Product could not be deleted"));
                }
            }

            return response;
        }

        public IHttpActionResult Put(int id, [FromBody]Product value)
        {
            IHttpActionResult response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "value is required"));

            if (value != null)
            {
                if (id > 20)
                {
                    response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError,
                                 "An error occurred attempting to update Servers"));
                }
                else
                {
                    response = ResponseMessage(new HttpResponseMessage(HttpStatusCode.OK));
                }
            }
            else
            {
                response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Conflict,
                     string.Format("No Product found for name = {0} ", id)));
            }

            return response;
        }


        public IHttpActionResult Post([FromBody]Product value)
        {
            IHttpActionResult response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "value is required"));

            if (value != null)
            {
                if (value.Id < 4)
                {
                    response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Conflict, "Duplicate value"));
                }
                else
                {
                    response = ResponseMessage(new HttpResponseMessage(HttpStatusCode.OK));
                }
            }

            return response;
        }

        [System.Web.Http.HttpPatch]
        public IHttpActionResult Patch(int id, [FromBody]Product value)
        {
            IHttpActionResult response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Value is required"));

            if (value != null)
            {
                if (id > 20)
                {
                    response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.NotFound, "No Product found for value"));
                }
                else
                {
                    response = Ok(value);
                }
            }

            return response;
        }
    }
}