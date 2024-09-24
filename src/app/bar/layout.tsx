

export default function BarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>

        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.pexels.com/photos/11820007/pexels-photo-11820007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-full lg:max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to our Bar</h1>
                    <p className="py-6">Feel free to order as many drinks as you like.</p>
                    <button className="btn btn-primary">Let's get some</button>
                </div>
            </div>
        </div>

        {children}
        </div>
  );
}
