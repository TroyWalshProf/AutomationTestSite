using System.Drawing;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace AutomationTestSite.Controllers
{
    public class PNGFileController : ApiController
    {
        // GET: api/PNGFile/GetImage
        /// <summary>
        /// Gets the image
        /// </summary>
        /// <param name="imageName">Color to be used</param>
        /// <returns>PNG image</returns>
        public IHttpActionResult GetImage(string image = "")
        {
            if (!string.IsNullOrEmpty(image))
            {
                var color = Color.FromName(image);
                if (color.A == 0 && color.B == 0 && color.G == 0 && color.R == 0)
                {
                    return NotFound();
                }
                IHttpActionResult result = null;
                HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                using (var bmp = new Bitmap(200, 200))
                {
                    using (Graphics g = Graphics.FromImage(bmp))
                    {
                        //Draw red rectangle to go behind cross
                        Rectangle rect = new Rectangle(0, 0, 200, 200);
                        g.FillRectangle(new SolidBrush(color), rect);
                    }
                    MemoryStream ms = new MemoryStream();

                    bmp.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                    response.Content = new ByteArrayContent(ms.ToArray());
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("image/png");
                }

                result = ResponseMessage(response);
                return result;
            }
            else
            {
                return NotFound();
            }
        }
    }
}