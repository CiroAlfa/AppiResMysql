import { conn } from '@/libs/mysql'

async function loadProducts(){
  const result = await conn.query('SELECT FROM * product')

}

function ProductsPage() {
  loadProducts()
  return (
    <div>ProductsPage</div>
  )
}

export default HomePage
