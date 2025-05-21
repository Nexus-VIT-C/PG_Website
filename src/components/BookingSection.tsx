
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BookingSection = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    property: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.property || !formData.date || !formData.time) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Submit form (in a real app, this would send data to a server)
    console.log("Form submitted:", formData);

    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your visit.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      property: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  return (
    <section id="book" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Book a Visit</h2>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Visit</CardTitle>
              <CardDescription>
                Fill out the form below and we'll arrange a convenient time for you to visit and explore our PG facilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name*</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="property">Select PG Property*</Label>
                  <Select
                    value={formData.property}
                    onValueChange={(value) => handleSelectChange("property", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a PG location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="anna-nagar">Anna Nagar PG</SelectItem>
                      <SelectItem value="adyar">Adyar PG</SelectItem>
                      <SelectItem value="velachery">Velachery PG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date*</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time*</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => handleSelectChange("time", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10am-12pm">10:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="12pm-2pm">12:00 PM - 2:00 PM</SelectItem>
                        <SelectItem value="2pm-4pm">2:00 PM - 4:00 PM</SelectItem>
                        <SelectItem value="4pm-6pm">4:00 PM - 6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Any special requirements or questions?"
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-pgBlue-dark">
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
