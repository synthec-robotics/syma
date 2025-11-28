import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/50 border-primary/20">
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-12 h-12 text-primary" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground">
                  404
                </h1>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">
                  Página No Encontrada
                </h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                  Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Home className="w-5 h-5 mr-2" />
                    Volver al Inicio
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
