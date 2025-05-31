import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Shield, Headphones, ArrowRight } from "lucide-react"

export default function HomePage() {

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-teal-600" />,
      title: "Envío Gratis",
      description: "En compras mayores a $50",
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "Compra Segura",
      description: "Protección total en tus pagos",
    },
    {
      icon: <Headphones className="h-8 w-8 text-teal-600" />,
      title: "Soporte 24/7",
      description: "Atención al cliente siempre disponible",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">¡Nuevos productos disponibles!</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Descubre lo mejor en <span className="text-teal-600">Sanda</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tu tienda online de confianza con los mejores productos, precios increíbles y servicio excepcional.
                  ¡Compra ahora y disfruta de envío gratis!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                  Explorar Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3"
                >
                  Ver Ofertas
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Hero Image"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 (2,847 reseñas)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">¿Listo para comenzar a comprar?</h2>
            <p className="text-xl text-teal-100">
              Únete a miles de clientes satisfechos y descubre por qué Sanda es la mejor opción para tus compras online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3">
                Crear Cuenta Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700 px-8 py-3">
                Explorar Catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
