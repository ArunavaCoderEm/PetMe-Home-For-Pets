import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Categories() {

    const [pet, setpet] = useState("");

    const params = useParams();

    useEffect(() => {
        setpet(params.id);
    },[params])

  return (
    <div>Categories {pet}</div>
  )
}
