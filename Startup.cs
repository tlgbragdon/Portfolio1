using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Portfolio1.Startup))]
namespace Portfolio1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
