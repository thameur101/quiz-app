'use client'

import Link from 'next/link';
import MainLayout from '@/compoments/mainLayout'
export default function Home({ Component, pageProps,fed }) {
  const handlClick =(event) =>{
    let idle = event.currentTarget.className;
    
 //const idle=  idleevent.toString();
    console.log(typeof(idle)+'idle=');
  }
  return (
     <MainLayout>

    <main>
    
      <div className='container'>
        <h1>Entertainment Quiz</h1>
        <Link href='/quiz'>
          <button className ='quiz'onClick={handlClick}>Categories List 1</button>
        </Link>
        <Link href='/quiz2/'>
          <button className='quiz2'onClick={handlClick} >Categories List 2</button>
        </Link>
        <Link href='/quiz3'>
          <button className='cat3'onClick={handlClick} >Categories List 3</button>
        </Link>
        <Link href='/quiz4'>
          <button className='cat4'onClick={handlClick} >Categories List 4</button>
        </Link>
        <Link href='/quiz'>
          <button className='cat5'onClick={handlClick}>Categories List 5</button>
        </Link>
        <Link href='/quiz'>
          <button className='cat6'onClick={handlClick}>Categories List 6</button>
        </Link>
        <Link href='/quiz'>
          <button className='cat7'onClick={handlClick}>Categories List 7</button>
        </Link>
        <Link href='/quiz'>
          <button className='cat8'onClick={handlClick}>Categories List 8</button>
        </Link>
        <Link href='/quiz'>
          <button className='cat9'onClick={handlClick}>Categories List 9</button>
        </Link>
        <Link href='/quiz'>
          <button className='cat10'onClick={handlClick}>Categories List 10</button>
        </Link>
      </div>

    </main>
    </MainLayout>


    
  );
  
}
