import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthForm() {
  return (
    <Card className="px-0">
      <CardHeader className="lg:px-8">
        <div className="space-y-2">
          <CardTitle className="text-3xl font-bold tracking-tighter">Welcome back</CardTitle>
          <CardDescription>Enter your CPF and password to access your account</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cpf">CPF or username</Label>
          <Input id="cpf" placeholder="123.456.789-00" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label className="leading-none" htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button className="w-full">Sign in</Button>
      </CardContent>
    </Card>
  )
}
