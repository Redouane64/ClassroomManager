using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassroomManager.Api.Models
{
    public class Teacher : Person
    {
        public int TeacherId { get; set; }

       
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }

       /* public bool Active
        {
            get
            {
                return EndDate.HasValue == false || EndDate > DateTime.UtcNow;
            }
        }*/

        // Navigation
        public virtual ICollection<Class> Classes { get; set; }
    }
}