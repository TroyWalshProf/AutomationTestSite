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
using AutomationTestSite.Models;

namespace AutomationTestSite.Controllers
{
    public class EmployeesAPIController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/EmployeesAPI
        public List<Employee> GetEmployees()
        {
            
            return db.Employees.ToList();
        }

        // GET: api/EmployeesAPI/5
        [ResponseType(typeof(Employee))]
        public IHttpActionResult GetEmployee(int id)
        {
            Employee employee = db.Employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        // PUT: api/EmployeesAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployee(int id, Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee.EmployeeID)
            {
                return BadRequest();
            }
            var department = db.Departments.FirstOrDefault(p => p.DepartmentName == employee.DepartmentObj.DepartmentName);
            if (department != null)
            {
                employee.DepartmentObj = department;
                employee.DepartmentID = department.DepartmentID;
            }

            var city = db.Cities.FirstOrDefault(p => p.CityName == employee.CityObj.CityName);
            if(city != null)
            {
                employee.CityObj = city;
                employee.CityID = city.CityID;
            }
           var state = db.States.Find(employee.StateObj.StateID);
            if(state == null)
            {
                return BadRequest();
            }

            if (employee.StateID != state.StateID || employee.StateObj.StateAbbreviation != state.StateAbbreviation || employee.StateObj.StateID != state.StateID || employee.StateObj.StateName != state.StateName)
            {
                return BadRequest();
            }

            employee.StateObj = state;
            employee.StateID = state.StateID;
            db.Entry(employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
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

        // POST: api/EmployeesAPI
        [System.Web.Http.HttpPost]
        [ResponseType(typeof(Employee))]
        public IHttpActionResult PostEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var department = db.Departments.FirstOrDefault(p => p.DepartmentName == employee.DepartmentObj.DepartmentName);
            if (department != null)
            {
                employee.DepartmentObj = department;
                employee.DepartmentID = department.DepartmentID;
            }

            var city = db.Cities.FirstOrDefault(p => p.CityName == employee.CityObj.CityName);
            if (city != null)
            {
                employee.CityObj = city;
                employee.CityID = city.CityID;
            }
            var state = db.States.Find(employee.StateObj.StateID);
            if (state == null)
            {
                return BadRequest();
            }

            if (employee.StateID != state.StateID || employee.StateObj.StateAbbreviation != state.StateAbbreviation || employee.StateObj.StateID != state.StateID || employee.StateObj.StateName != state.StateName)
            {
                return BadRequest();
            }

            employee.StateObj = state;
            employee.StateID = state.StateID;
            db.Employees.Add(employee);
            db.SaveChanges();

            return CreatedAtRoute("actionApi", new { id = employee.EmployeeID }, employee);
        }

        // DELETE: api/EmployeesAPI/5
        [ResponseType(typeof(Employee))]
        public IHttpActionResult DeleteEmployee(int id)
        {
            Employee employee = db.Employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            db.Employees.Remove(employee);
            db.SaveChanges();

            return Ok(employee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeExists(int id)
        {
            return db.Employees.Count(e => e.EmployeeID == id) > 0;
        }
    }
}