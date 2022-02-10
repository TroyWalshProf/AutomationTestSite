using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using AutomationTestSite.Models;
using Newtonsoft.Json;

namespace AutomationTestSite.Controllers
{
    public class FileAPIController : ApiController
    {
        /// <summary>
        /// Posts file to upload API
        /// </summary>
        /// <returns>Returns file uploaded</returns>
        [HttpPost, Route("api/upload")]
        [ResponseType(typeof(FilesUploaded))]
        public async Task<HttpResponseMessage> UploadFile()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                return new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.UnsupportedMediaType,
                    Content = new StringContent("Content is not 'multipart/form-data'")
                };
            }

            var provider = new MultipartMemoryStreamProvider();

            await Request.Content.ReadAsMultipartAsync(provider);

            FilesUploaded name = new FilesUploaded();
            foreach (var file in provider.Contents)
            {
                string fileName = file.Headers.ContentDisposition.FileName.Trim('\"');
                name.Files.Add( new Files()
                {
                    ContentName = file.Headers.ContentDisposition.Name,
                    FileName = fileName,
                    DateUploaded = DateTime.Now
                });
            }

            var content = JsonConvert.SerializeObject(name);
            StringContent streamContent = new StringContent(content);
            streamContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.OK,
                Content = streamContent
            };
        }
    }
}