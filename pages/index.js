/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div className="flex-shrink-0">
    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-light text-black">ChitChat</div>
    <p className="text-red-500">You have a new message!</p>
  </div>
</div>
  )
}
