using System.Collections.Generic;
using System.Web.Mvc;

namespace YourApp.Controllers
{
    public class InventoryController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetStockData()
        {
            var data = new List<object>
            {
                new { Product = "Laptops", Stock = 45 },
                new { Product = "Monitors", Stock = 32 },
                new { Product = "Keyboards", Stock = 60 },
                new { Product = "Mice", Stock = 20 },
                new { Product = "Printers", Stock = 15 }
            };

            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}
