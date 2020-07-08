using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageName { get; set; }
        public int Age { get; set; }
        public string HomeTown { get; set; }

        public Artist()
        {
            
        }

        public Artist(int id, string name, string imageName, int age, string homeTown)
        {
            this.Id = id;
            this.Name = name;
            this.ImageName = imageName;
            this.Age = age;
            this.HomeTown = homeTown;
        }
    }
}
