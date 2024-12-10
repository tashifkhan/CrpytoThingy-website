"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="min-h-screen py-[10rem]">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-5xl yuji-mai-regular font-extrabold  text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text mb-4">
						Connect With Us
					</h2>
					<p className="text-slate-300 max-w-2xl mx-auto">
						Have questions about Kalki? Whether you&apos;re interested in
						investing or need technical support, our team is here to help.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Contact Information Card */}
					<div className="md:col-span-1">
						<Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl h-full">
							<CardHeader>
								<CardTitle className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
									Join Our Community
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-6">
									<div className="flex items-start space-x-3">
										<Mail className="w-5 h-5 text-orange-400 mt-1" />
										<div>
											<h3 className="font-semibold text-slate-200">Email</h3>
											<p className="text-slate-400">support@kalkikug.in</p>
										</div>
									</div>

									<div className="flex items-start space-x-3">
										<FaTwitter className="w-5 h-5 text-orange-400 mt-1" />
										<div>
											<h3 className="font-semibold text-slate-200">Twitter</h3>
											<p className="text-slate-400">@KALKI_KAALYUG</p>
										</div>
									</div>

									<div className="flex items-start space-x-3">
										<FaTelegramPlane className="w-5 h-5 text-orange-400 mt-1" />
										<div>
											<h3 className="font-semibold text-slate-200">Telegram</h3>
											<p className="text-slate-400">t.me/kalkiyugcoin</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<div className="md:col-span-2">
						<Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
							<CardHeader>
								<CardTitle className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
									Send Message
								</CardTitle>
							</CardHeader>
							<CardContent>
								<form className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label className="block text-sm font-medium text-slate-300 mb-2">
												Your Name
											</label>
											<Input
												name="name"
												value={formData.name}
												onChange={handleChange}
												className="bg-white/5 border-white/10 text-slate-200"
												placeholder="John Doe"
												required
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-slate-300 mb-2">
												Email Address
											</label>
											<Input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												className="bg-white/5 border-white/10 text-slate-200"
												placeholder="you@example.com"
												required
											/>
										</div>
									</div>

									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Subject
										</label>
										<Input
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											className="bg-white/5 border-white/10 text-slate-200"
											placeholder="How can we help?"
											required
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Message
										</label>
										<Textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											className="bg-white/5 border-white/10 text-slate-200 min-h-[150px]"
											placeholder="Your message here..."
											required
										/>
									</div>

									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-lg"
										onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
											e.preventDefault();
											const mailtoLink = `mailto:support@kalki.finance?subject=${encodeURIComponent(
												formData.subject
											)}&body=${encodeURIComponent(
												`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
											)}`;
											window.open(mailtoLink);
										}}
									>
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
