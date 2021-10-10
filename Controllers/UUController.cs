using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netflix_clone.Models;

namespace netflix_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UUController : ControllerBase
    {
        private readonly UserContext _context;

        public UUController(UserContext context)
        {
            _context = context;
        }

        // POST: api/UU
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<bool>> SignIn(User user)
        {
            try
            {
                var usr = await (from u in _context.User
                                 where u.Email == user.Email && u.Password == user.Password
                                 select u).FirstAsync();
                return true;
            }
            catch (Exception ex)
            {
                if (ex is System.InvalidOperationException) return false;
                throw ex;
            }
        }

        private bool UserExists(long id)
        {
            return _context.User.Any(e => e.Id == id);
        }
    }
}
