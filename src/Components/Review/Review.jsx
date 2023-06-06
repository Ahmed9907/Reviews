import React from 'react'
import style from "./Review.module.css";
import { toast } from 'react-hot-toast';



export default function Review() {
  return <>
  <h1 className='text-center'>Customer Review Form</h1>

      <label>Name</label>
      <input type="text" name="Customer_name" placeholder='Customer Name'/>
      <label>Date</label>
      <input type="Date" name="Date" placeholder=' Date' />
      <label>Phone</label>
      <input type="tel" name="Customer_phone" placeholder='Customer Phone'/>
      <label>Email</label>
      <input type="email" name="Customer_email" placeholder='Customer Email'/>
      <label>Message</label>
      <textarea name="message" placeholder='Leave your Massage'/>
      <input type="submit" value="Send"  onClick={toast.success("review is sent" , {duration:2000 })}/>
  </>
}
