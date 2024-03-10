import React from 'react'
import { Products } from '../../assets/img'
import { Link } from 'react-router-dom'

function HomeProduct() {
  return <>
    <section className={`w-full bg-lightGray `}>
        <div className={`container mx-auto flex items-center flex-wrap justify-center py-4`}>
            <img src={Products} className={`md:w-[700px] max-w-full -mt-[6rem]`} />
            <div className={`flex flex-col items-center flex-1 sm:min-w-[500px] w-full`}>
                <h1 className={`sm:text-[3rem] text-[2rem] text-black font-semibold tracking-[.2rem]`}>
                    NOS PRODUITS
                </h1>

                <h1 className={`sm:text-[2rem] text-[1.1rem] text-center text-golden font-light tracking-[.2rem]`}>
                La diversité des gammes avec 
                </h1>
                <h1 className={`sm:text-[2rem] text-[1.1rem] text-center text-golden font-semibold tracking-[.2rem]`}>
                la meilleure qualité!
                </h1>
                <Link to={`#`} className={`px-8 py-2 bg-black text-white rounded-xl text-[1.3rem] mt-4`}>
                    Decouvrir
                </Link>
            </div>

        </div>
    </section>
  </>
}

export default HomeProduct