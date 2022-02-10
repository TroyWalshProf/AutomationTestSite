using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AutomationTestSite.Controllers
{
    public class AutomationController : Controller
    {
        // GET: Automation
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ErrorPage()
        {
            Random r = new Random();
            if (Math.Floor(r.NextDouble() * (10 - 1 + 1)) + 1 > 6)
            {
                return View();
            }
            else
            {
                return new HttpStatusCodeResult(500);
            }
        }



        public ActionResult AsyncPage()
        {
            return View();
        }

        public ActionResult iFramePage()
        {
            return View();
        }

        public ActionResult ResponsiveUIPage()
        {
            return View();
        }
    }
}