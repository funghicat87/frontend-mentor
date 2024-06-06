import omeletteImage from '../assets//RecipePage/omelette.jpeg'; 
import { preparation, ingredients, instructions, nutrition } from "../constants";

const RecipePage = () => {
  return (
    <div className='w-full h-screen bg-Eggshell flex items-center justify-center md:py-20'>
      <div className='bg-White w-[1000px] md:rounded-3xl md:p-12'>
        <img src={omeletteImage} alt="Omelette" className='md:rounded-2xl' />
        <div className='md:p-0 p-12'>
          <div className='font-serif md:mt-12 text-[3.5rem] text-stone-800'>
            Simple Omelette Recipe
          </div>
          <p className='text-xl mt-5 text-stone-500'>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
          <div className='rounded-2xl p-8 mt-7 bg-RoseWhite'>
            <h1 className='text-2xl font-bold text-[#8a315a]'>
              Preparation time
            </h1>
            <div>
              {preparation.map((ele, index) => (
                <li key={index} className='text-xl text-stone-500 mt-3'>
                  <span className='marker:text-[#8a315a] font-bold text-xl text-stone-500 mt-3'>{ele.title}</span>
                  {" "}{ele.content}
                </li>
              ))}
            </div>
          </div>
          <div className='divide-y-2 divide-slate-200'>
            <div className='mt-8 '>
              <h1 className='text-4xl font-serif text-[#7E4739] font-bold'>
                Ingredients
              </h1> 
              <div className='mt-6 '>
                {
                  ingredients.map((ele,index) =>(
                    <li className='marker:text-[#7E4739] text-xl text-stone-500 mt-3' key={index}>{ele}</li>
                  ))
                }
              </div>
            </div>
            <div className='mt-8'>
              <h1 className='pt-8 text-4xl font-serif text-[#7E4739] font-bold'>
                Instructions
              </h1>
              <div className='list-none mt-6'>
                {
                  instructions.map((ele) => (
                    <div className='flex mt-3' key={ele.id}>
                      <span className='text-xl text-[#7E4739] font-bold mr-5'>{ele.id}{"."}</span>
                      <li className='text-xl text-stone-500'>
                        <span className='font-bold text-xl text-stone-500 mt-3'>{ele.title}</span>
                        {ele.content}
                      </li>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='mt-8'>
              <h1 className='pt-8 text-4xl font-serif text-[#7E4739] font-bold'>
                  Nutrition
              </h1>
              <p className='text-xl text-stone-500 mt-3'>The table below shows nutritional values per serving without the additional fillings.</p>
              <div className='divide-y-2 divide-slate-200 mt-3 '>
                {
                  nutrition.map((ele, index) => (
                    <li className='list-none text-xl text-stone-500 flex py-3' key={index}>
                      <div className='ml-[50px] w-[400px] '>{ele.title}</div>
                      <div className='text-xl text-[#7E4739] font-bold mr-5'>{ele.content}</div>
                    </li>
                  ))
                }
                </div>
              </div>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default RecipePage