export function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-gray-400 text-sm tracking-wider">(Introduction)</span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-5xl leading-tight">
            Creative Professional and Digital Designer. Based in{' '}
            <span className="text-gray-400">Your City</span>, collaborating with global brands.
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
            I work with innovative companies and agencies, committed to solving problems through beautiful 
            designs and experiences. My approach combines strategic thinking with creative execution to 
            deliver exceptional results.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="mb-8">
            <span className="text-gray-400 text-sm tracking-wider">(Services)</span>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 py-4 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">(01)</span>
                <h3 className="text-lg">Strategy & Consulting</h3>
              </div>
              <p className="text-gray-400 lg:ml-auto lg:max-w-md">
                Leading creative teams, generating innovative ideas, and developing strong strategic foundations.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 py-4 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">(02)</span>
                <h3 className="text-lg">UI/UX Design</h3>
              </div>
              <p className="text-gray-400 lg:ml-auto lg:max-w-md">
                Creating intuitive user experiences and beautiful interfaces that solve real problems.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 py-4 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">(03)</span>
                <h3 className="text-lg">Brand Identity</h3>
              </div>
              <p className="text-gray-400 lg:ml-auto lg:max-w-md">
                Developing comprehensive brand identities that resonate with target audiences.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 py-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">(04)</span>
                <h3 className="text-lg">Web Development</h3>
              </div>
              <p className="text-gray-400 lg:ml-auto lg:max-w-md">
                Building responsive, performant websites and web applications with modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}