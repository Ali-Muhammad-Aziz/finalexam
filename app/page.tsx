import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { map } from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MdDeleteForever } from "react-icons/md";
import { HiFastForward } from "react-icons/hi";
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";

const home = () => {
  return (
    <main className='flex bg-pink-300 h-screen flex-col items-center justify-between '>
      <div className='grid grid-cols-3 grid-rows-1 gap-48 mt-16'>
      
      <div className='flex border border-black justify-between items-center bg-green-500 w-[300px] h-40'>
      <div className='flex flex-col font-bold text-4xl'>Total task</div>
      <div className='flex flex-col font-bold text-6xl' >04</div>
      </div>
      
      <div className='flex border border-black justify-between items-center bg-yellow-500 w-[300px] h-40'>
      <div className='flex flex-col font-bold text-4xl'>complete</div>
      <div  className='flex text-6xl font-bold'>02</div>
      </div>
      
      <div className='flex border border-black justify-between items-center bg-blue-500 w-[300px] h-40'>
      <div className='flex flex-col font-bold text-4xl'>pending</div>
      <div  className='flex text-6xl font-bold'>03</div>
      </div >
     
       </div>
       <div className='flex justify-between mt-8 items-center   gap-6'>
        <Input placeholder='Enter task here...'
        className='w-[1150px] border-black'/>
        <Button className='flex border border-black' type='submit'>Add Task</Button>

       </div>

       <div>
       <div className='flex gap-y-4'>
       <Card className='flex w-[1300px] m-2 mt-10 justify-between items-center border-black gap-y-4'>
  <CardHeader>
    <CardTitle className='flex border-black'>This is the simple task 1...</CardTitle>
    <CardDescription>
      <Button className='flex justify-between items-center border-black bg-pink-300 rounded-2xl'>Mark as completed</Button>
     <div className='flex'> < MdDeleteForever size={25} /></div>
    </CardDescription>
  </CardHeader>
 
</Card>
</div>
       
<div className='flex gap-y-4'>
       <Card className='flex w-[1300px] m-2 border-black gap-y-4'>
  <CardHeader>
    <CardTitle className='flex border-black'>This is the simple task 1...</CardTitle>
    <CardDescription>
      <Button className='flex justify-between items-center border-black bg-pink-300  rounded-2xl'>Mark as completed</Button>
      <div className='flex'> < MdDeleteForever size={25} /></div>
    </CardDescription>
  </CardHeader>
 
</Card>
</div>

<div className='flex gap-y-4'>
       <Card className='flex w-[1300px]  m-2 border-black gap-y-4'>
  <CardHeader>
    <CardTitle className='flex border-black'>This is the simple task 1...</CardTitle>
    <CardDescription>
      <Button className='flex justify-between items-center border-black bg-pink-300  rounded-2xl'>Mark as completed</Button>
      <div className='flex'> < MdDeleteForever size={25} /></div>
    </CardDescription>
  </CardHeader>
 
</Card>
</div>
<div className='flex gap-y-4'>
       <Card className='flex w-[1300px]  m-2  border-black gap-y-4'>
  <CardHeader>
    <CardTitle className='flex border-black'>This is the simple task 1...</CardTitle>
    <CardDescription>
      <Button className='flex justify-between items-center border-black bg-pink-300  rounded-2xl'>Mark as completed</Button>
      <div className='flex'> < MdDeleteForever size={25} /></div>
    </CardDescription>
  </CardHeader>
 
</Card>
</div>
</div>
<div className='grid grid-cols-2 grid-rows-1 gap-96 '>
<div className='flex border rounded-3xl border-black justify-between items-center bg-blue-200 w-[200px] h-20'>
      <div className='flex flex-col font-bold text-2xl  '>Privious</div>
      
      <div className='p-12'><FaHandPointLeft size={30} /></div>
      
      </div>
      
      <div className='flex border rounded-3xl border-black justify-between items-center bg-blue-200 w-[200px] h-20'>
      <div className='flex flex-col font-bold text-2xl'>  Next</div>
      
      <div ><FaHandPointRight size={30}  /></div>
      
      <div  className='flex text-6xl font-bold'></div>
      </div>
      </div>
    </main>
  )
}

export default home