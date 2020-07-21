using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using album_collection.Models;

namespace album_collection.Repositories
{
    public interface IRepository<T> where T : class
    {
        public IEnumerable<T> GetAll();
        T GetById(int id);
        void Create(T obj);
        void Delete(T entity);
        void Update(T entity);
    }
}
