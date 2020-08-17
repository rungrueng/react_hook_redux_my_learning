import React, { useEffect } from 'react';
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";
import Footer from "../components/Footer";
import { productsFetch } from "../actions";
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsFetch())
  }, [])

  return (
    <div>
      <Header />
      {Array.isArray(products.datas) && <Monitor products={products.datas} />}
      <Footer company="Buncha" email="rungrueng.buncha@gmail.com" />
    </div>
  )

}

