using AutomationTestSite.Models;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web.Http;
using System.Web.Mvc;

namespace AutomationTestSite.Controllers
{
    public class StringController : ApiController
    {
        Product[] products = new Product[] 
        { 
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 }, 
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M }, 
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M } 
        };

        [System.Web.Http.Route("api/String/Get")]
        public IHttpActionResult Get()
        {
            IHttpActionResult response = null;
            string toBeUsed = string.Empty;
            foreach (var p in products)
            {
                toBeUsed += buildString(p);
            }

            var httpResponse = new HttpResponseMessage(HttpStatusCode.OK);
            httpResponse.Content = new StringContent(toBeUsed);
            httpResponse.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            response = ResponseMessage(httpResponse);
            return response;
        }
        [System.Web.Http.Route("api/String/{id:int}")]
        public IHttpActionResult GetProduct(int id)
        {
            IHttpActionResult response = null;


            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                response = ResponseMessage(new HttpResponseMessage(HttpStatusCode.NoContent));
                return response;
            }

            if (id > 1)
            {
                response = Conflict();
                return response;
            }

            var httpResponse = new HttpResponseMessage(HttpStatusCode.OK);
            httpResponse.Content = new StringContent(buildString(product));
            httpResponse.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            response = ResponseMessage(httpResponse);

            return response;
        }
        [System.Web.Http.Route("api/String/{name}")]
        public IHttpActionResult GetProduct(string name)
        {
            IHttpActionResult response = null;


            var product = products.FirstOrDefault((p) => p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
            if (product == null)
            {
                response = ResponseMessage(new HttpResponseMessage(HttpStatusCode.NoContent));
                return response;
            }


            var httpResponse = new HttpResponseMessage(HttpStatusCode.OK);
            httpResponse.Content = new StringContent(buildString(product));
            httpResponse.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            response = ResponseMessage(httpResponse);

            return response;
        }

        public IHttpActionResult Delete(int id)
        {
            IHttpActionResult response = null;

            if (id > 3 || id < 0)
            {
                response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.NotFound,"Resource was not found"));
                return response;
            }



            var httpResponse = new HttpResponseMessage(HttpStatusCode.OK);

            response = ResponseMessage(httpResponse);

            return response;
        }


        public IHttpActionResult Put(int id, [FromBody]string value)
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

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/String/")]
        public IHttpActionResult Post([FromBody]string value)
        {
            IHttpActionResult response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "value is required"));

            if (value != null)
            {
                if (value.Equals(string.Empty))
                {
                    response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.BadRequest, "No data"));
                }
                else if (value.Contains("Product ID: 1"))
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
        public IHttpActionResult Patch(int id, [FromBody]string value)
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
                    //// TODO: Figure out why returnValue will fail between streamcontent and stringcontent
                    string returnValue = $"Patched {value}";
                    string returnValue2 = $"Patched";
                    response = Ok(returnValue2);
                }
            }

            return response;
        }

        [System.Web.Http.Route("api/ZED")]
        [System.Web.Http.AcceptVerbs("ZED")]
        public IHttpActionResult Zed([FromBody]string value)
        {
            var httpResponse = new HttpResponseMessage(HttpStatusCode.UseProxy);

            IHttpActionResult response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.UseProxy, "ZED!"));

            if (value != null)
            {
                response = Ok(value);
            }

            return response;

        }

        private string buildString(Product product)
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("Product ID: " + product.Id + " ");
            sb.AppendLine("Product Name: " + product.Name + " ");
            sb.AppendLine("Product Category " + product.Category + " ");
            sb.AppendLine("Product Price " + product.Price + " ");

            return sb.ToString();
        }
    }
}