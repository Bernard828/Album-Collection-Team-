using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using album_collection.Models;
using album_collection.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace album_collection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistController : ControllerBase
    {
        // GET: api/<ArtistController>
        private IRepository<Artist> artistRepo;

        public ArtistController(IRepository<Artist> artistRepo)
        {
            this.artistRepo = artistRepo;
        }

        [HttpGet]
        public IEnumerable<Artist> Get()
        {
            return artistRepo.GetAll();
        }

        // GET api/<ArtistController>/5
        [HttpGet("{id}")]
        public Artist Get(int id)
        {
            return artistRepo.GetById(id);
        }

        // POST api/<ArtistController>
        [HttpPost]
        public IEnumerable<Artist>  Post([FromBody] Artist  value)
        {
            artistRepo.Create(value);
            return artistRepo.GetAll();
        }

        // PUT api/<ArtistController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ArtistController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
