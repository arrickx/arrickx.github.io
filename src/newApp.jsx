import * as img from './assets/index.js';
import './index.css';

const newApp = () => {
  return (
    <div className='font-outfit justify-end items-center bg-stone-950 flex flex-col px-20 py-12 max-md:px-5'>
      {/* hero */}
      <div className='w-full max-w-[1440px] mt-14 max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex max-md:flex-col max-md:items-center max-md:gap-0'>
          <div className='flex flex-col items-stretch w-[55%] mt-[25%] max-md:w-full max-md:ml-0 max-md:mt-8 max-md:order-2'>
            <div className='justify-center items-stretch flex flex-col'>
              <div className='text-white text-left font-bold text-5xl tracking-widest leading-[80px] max-xl:text-4xl max-md:text-3xl max-md:leading-10  max-md:text-center'>
                RICHTER LAU
              </div>
              <div className='text-zinc-400 text-left text-3xl leading-15 max-xl:text-2xl max-md:text-xl max-md:text-center'>
                In the code flow, building impossible.
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-[45%] max-w-xl max-md:w-full max-md:max-w-[280px] max-md:order1'>
            <img
              loading='lazy'
              src={img.hero}
              className='w-full max-md:mt-50 rounded-[50px] '
            />
          </div>
        </div>
      </div>
      {/* skills */}
      <div className='text-head'>what products made of</div>
      <div className='text-title'>skills</div>
      <div className='text-subtitle'>front-end , back-end and another-end</div>
      {/* icons */}
      <div className='w-full max-w-[1440px] mt-40 max-md:max-w-full max-xl:mt-20'>
        <div className='flex justify-center md:gap-10 lg:gap-18 xl:gap-32 max-md:flex-col max-md:items-stretch'>
          <div className='icon-set max-md:order-2'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.nodeLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.mongoLogo} className='p-2.5' />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.psqlLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.graphqlLogo} />
              </div>
            </div>
            <div className='text-subtitle icon-title'>back-end</div>
          </div>

          <div className='icon-set max-md:order-1'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.reactLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.jsLogo} />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.reduxLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.tsLogo} />
              </div>
            </div>
            <div className='text-subtitle icon-title'>front-end</div>
          </div>

          <div className='icon-set max-md:order-3'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.openaiLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.figmaLogo} className='p-1.5' />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.gitLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.jestLogo} />
              </div>
            </div>
            <div className='text-subtitle icon-title'>testings & tools</div>
          </div>
        </div>
      </div>

      {/* experiences */}
      <div className='text-head'>the History of Innovation</div>
      <div className='text-title'>experiences</div>
      <div className='text-subtitle'>traditional, non-tranditional</div>
      {/* 
      <div className='w-full max-w-[1650px] mt-52 max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0'>
            <div className='items-center flex flex-col max-md:max-w-full max-md:mt-10'>
              <div className='text-orange-300 text-2xl font-bold leading-7 tracking-wide uppercase self-center whitespace-nowrap'>
                IMAGINEXT{' '}
              </div>
              <div className='text-white text-4xl font-bold leading-10 tracking-wider self-center whitespace-nowrap mt-4'>
                Software Engineer{' '}
              </div>
              <div className='text-zinc-400 text-3xl font-bold leading-8 tracking-wide self-center whitespace-nowrap mt-6'>
                2022 - Present
              </div>
              <div className='text-zinc-400 text-3xl font-bold leading-8 tracking-wide self-stretch mt-12 max-md:max-w-full max-md:mt-10'>
                <ul>
                  <li>
                    Leveraged Next.js and Node.js for a seamless, interactive
                    debugging experience.
                  </li>
                  <li>
                    Published an npm package for effortless integration and
                    community collaboration.
                  </li>
                  <li>
                    Implemented TypeScript for smoother onboarding, simpler
                    dependencies, and streamlined maintenance.
                  </li>
                  <li>
                    Built visualization tools (D3 &amp; AST parser) for clear
                    navigation and understanding of complex Next.js
                    applications.
                  </li>
                  <li>
                    Crafted robust E2E tests with Cypress to ensure app
                    stability and rapid issue resolution.
                  </li>
                  <li>
                    Product developed under tech accelerator with OS Labs
                    (opensourcelabs.io).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0'>
            <div className='items-center flex grow flex-col max-md:max-w-full max-md:mt-10'>
              <div className='text-orange-300 text-2xl font-bold leading-7 tracking-wide uppercase self-center whitespace-nowrap'>
                China Merchants Bank
              </div>
              <div className='text-white text-4xl font-bold leading-10 tracking-wider self-center whitespace-nowrap mt-4'>
                Credit Risk Associate{' '}
              </div>
              <div className='text-zinc-400 text-3xl font-bold leading-8 tracking-wide self-center whitespace-nowrap mt-8'>
                2016 - Present
              </div>
              <div className='text-zinc-400 text-3xl font-bold leading-8 tracking-wide self-stretch mt-12 max-md:max-w-full max-md:mt-10'>
                <ul>
                  <li>
                    Developed and integrated 100% of fair market value models,
                    seamlessly integrated with third-party APIs.
                  </li>
                  <li>
                    Optimized VBA scripts and custom algorithms for monitoring
                    FX rates, enforcing internal policies.
                  </li>
                  <li>
                    Achieved 80% faster processing while ensuring compliance
                    with profit &amp; loss limits.
                  </li>
                  <li>
                    Automated file transfers and folder creation with Batch
                    Scripts, saving over an hour per week in productivity.
                  </li>
                  <li>
                    Designed and maintained monthly transaction reports using
                    SQL databases, guaranteeing reliable summary statistics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className='text-orange-300 text-center text-2xl font-bold leading-7 tracking-wide uppercase whitespace-nowrap mt-80 max-md:mt-10'>
        From zero to pixels
      </div>
      <div className='text-white text-center text-5xl font-bold leading-[50.6px] tracking-wider whitespace-nowrap mt-4 max-md:text-4xl'>
        projects
      </div>
      <div className='text-zinc-400 text-center text-3xl font-bold leading-8 tracking-wide whitespace-nowrap mt-8'>
        code caffeine, code brew
      </div>
      <div className='items-stretch flex w-full max-w-[1428px] justify-between gap-5 mt-52 max-md:max-w-full max-md:flex-wrap max-md:mt-10'>
        <div className='items-center flex flex-col max-md:max-w-full'>
          <div className='text-white text-4xl font-bold leading-10 tracking-wider self-center whitespace-nowrap'>
            OpenAI Exploration
          </div>
          <img
            loading='lazy'
            srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/30865825909407fc94221193f32a29d93b46b7bb8d43e6034cfd50de5435c550?apiKey=0929d7104d224209a140b81d7cb94450&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30865825909407fc94221193f32a29d93b46b7bb8d43e6034cfd50de5435c550?apiKey=0929d7104d224209a140b81d7cb94450&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30865825909407fc94221193f32a29d93b46b7bb8d43e6034cfd50de5435c550?apiKey=0929d7104d224209a140b81d7cb94450&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30865825909407fc94221193f32a29d93b46b7bb8d43e6034cfd50de5435c550?apiKey=0929d7104d224209a140b81d7cb94450&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30865825909407fc94221193f32a29d93b46b7bb8d43e6034cfd50de5435c550?apiKey=0929d7104d224209a140b81d7cb94450&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30865825909407fc94221193f32a29d93b46b7bb8d43e6034cfd50de5435c550?apiKey=0929d7104d224209a140b81d7cb94450&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30865825909407fc94221193f32a29d93b46b7bb8d43e6034cfd50de5435c550?apiKey=0929d7104d224209a140b81d7cb94450&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30865825909407fc94221193f32a29d93b46b7bb8d43e6034cfd50de5435c550?apiKey=0929d7104d224209a140b81d7cb94450&'
            className='aspect-square object-contain object-center w-[350px] overflow-hidden self-center max-w-full mt-8'
          />
          <div className='text-zinc-400 text-center text-3xl font-bold leading-8 tracking-wide self-stretch mt-8 max-md:max-w-full'>
            This project demonstrates various functionalities of the OpenAI API,
            including chat, Document QA, function calling, and semantic search.
          </div>
          <div className='text-orange-300 text-3xl font-bold leading-8 tracking-wide max-w-[458px] self-center mt-8 max-md:max-w-full'>
            #openai #langchain #javascript{' '}
          </div>
        </div>
        <div className='items-center flex flex-col px-20 max-md:max-w-full max-md:px-5'>
          <div className='text-white text-4xl font-bold leading-10 tracking-wider self-center whitespace-nowrap'>
            LastResort
          </div>
          <img
            loading='lazy'
            srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/31f3f28425a035a5c6ec5201a1904acfe9b881810d31ea7700bcf1d4e969ca74?apiKey=0929d7104d224209a140b81d7cb94450&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f3f28425a035a5c6ec5201a1904acfe9b881810d31ea7700bcf1d4e969ca74?apiKey=0929d7104d224209a140b81d7cb94450&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f3f28425a035a5c6ec5201a1904acfe9b881810d31ea7700bcf1d4e969ca74?apiKey=0929d7104d224209a140b81d7cb94450&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f3f28425a035a5c6ec5201a1904acfe9b881810d31ea7700bcf1d4e969ca74?apiKey=0929d7104d224209a140b81d7cb94450&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f3f28425a035a5c6ec5201a1904acfe9b881810d31ea7700bcf1d4e969ca74?apiKey=0929d7104d224209a140b81d7cb94450&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f3f28425a035a5c6ec5201a1904acfe9b881810d31ea7700bcf1d4e969ca74?apiKey=0929d7104d224209a140b81d7cb94450&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f3f28425a035a5c6ec5201a1904acfe9b881810d31ea7700bcf1d4e969ca74?apiKey=0929d7104d224209a140b81d7cb94450&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f3f28425a035a5c6ec5201a1904acfe9b881810d31ea7700bcf1d4e969ca74?apiKey=0929d7104d224209a140b81d7cb94450&'
            className='aspect-square object-contain object-center w-[350px] overflow-hidden self-center max-w-full mt-8'
          />
          <div className='text-zinc-400 text-center text-3xl font-bold leading-8 tracking-wide self-center max-w-xs mt-8'>
            A website dedicated to fleeting and expressive moments of
            self-sharing.
          </div>
          <div className='text-orange-300 text-3xl font-bold leading-8 tracking-wide self-stretch whitespace-nowrap mt-8 max-md:ml-2 max-md:mr-2'>
            #react #express #webpack
          </div>
        </div>
      </div>
      <div className='text-orange-300 text-center text-3xl font-bold leading-8 tracking-wide max-w-[456px] mt-52 max-md:max-w-full max-md:mt-10'>
        Always coding, always learning.
      </div>
      <div className='items-stretch flex w-[340px] max-w-full justify-between gap-5 mt-12 mb-14 max-md:justify-center max-md:my-10'>
        <div className='justify-center items-center bg-orange-300 bg-opacity-10 flex basis-[0%] flex-col h-20 flex-1 px-1.5 rounded-[200px]'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/0629bd741b43d902c0929e02f9c6fb501ac4d891367772ee71872774cd76cd86?apiKey=0929d7104d224209a140b81d7cb94450&'
            className='aspect-square object-contain object-center w-full overflow-hidden'
          />
        </div>
        <div className='justify-center items-center bg-orange-300 bg-opacity-10 flex basis-[0%] flex-col h-20 flex-1 px-1.5 rounded-[200px]'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/019f27cf233bef18bbbf328dda3bd2bbefd279c462f73ad120685d7bb255327c?apiKey=0929d7104d224209a140b81d7cb94450&'
            className='aspect-square object-contain object-center w-full overflow-hidden'
          />
        </div>
        <div className='justify-center items-center bg-orange-300 bg-opacity-10 flex basis-[0%] flex-col h-20 flex-1 px-1.5 rounded-[200px]'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/08f54b92331fc5a85540bd0af32415449c804e34f6f5b5e9e2cea634df90faec?apiKey=0929d7104d224209a140b81d7cb94450&'
            className='aspect-square object-contain object-center w-full overflow-hidden'
          />
        </div>
      </div> */}
    </div>
  );
};

export default newApp;
