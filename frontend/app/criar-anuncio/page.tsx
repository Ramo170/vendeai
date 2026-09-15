"use client"

import { useState } from "react"

export default function CriarAnuncio() {
 const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")
 const [price, setPrice] = useState("")
 const [sellerId, setSellerId] = useState("")
 const [categoryId, setCategoryId] = useState("")

 async function handleSubmit(event: React.FormEvent) {
  event.preventDefault()

  const response = await fetch("http://localhost:3000/products/listings", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    title,
    description,
    priceInCents: Number(price) * 100,
    sellerId,
    categoryId,
   }),
  })

  if (!response.ok) {
   alert("Erro ao criar anúncio")
   return
  }

  alert("Anúncio criado com sucesso!")

  setTitle("")
  setDescription("")
  setPrice("")
  setSellerId("")
  setCategoryId("")
 }

 return (
  <main>
   <h1>Criar anúncio</h1>

   <form onSubmit={handleSubmit}>
    <input
     placeholder="Título"
     value={title}
     onChange={(event) => setTitle(event.target.value)}
    />

    <textarea
     placeholder="Descrição"
     value={description}
     onChange={(event) => setDescription(event.target.value)}
    />

    <input
     type="number"
     placeholder="Preço"
     value={price}
     onChange={(event) => setPrice(event.target.value)}
    />

    <input
     placeholder="ID do vendedor"
     value={sellerId}
     onChange={(event) => setSellerId(event.target.value)}
    />

    <input
     placeholder="ID da categoria"
     value={categoryId}
     onChange={(event) => setCategoryId(event.target.value)}
    />

    <button type="submit">
     Publicar anúncio
    </button>
   </form>
  </main>
 )
}