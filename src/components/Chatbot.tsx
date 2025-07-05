import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axiosInstance from "../lib/axios";

interface Message {
    sender: "user" | "bot";
    text: string;
}

const initialMessages: Message[] = [
    {
        sender: "bot",
        text: "Hello! 👋 How can I help you today?"
    }
];

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, open]);

    const handleSend = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
        setInput("");
        setIsLoading(true);

        try {
            const { data } = await axiosInstance.post('/webhook/chatbot', {
                message: userMessage,
                timestamp: new Date().toISOString(),
                needsCompanyInfo: true,
                context: {
                    role: "assistant",
                    company: "NLS Consulting",
                    expertise: ["Intelligence Artificielle", "Machine Learning", "Data Science"],
                    language: "fr",
                    persona: "Expert consultant en IA professionnel et serviable"
                }
            });

            setMessages(prev => [...prev, {
                sender: "bot",
                text: data.botResponse || "Je n'ai pas pu traiter cette demande."
            }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                sender: "bot",
                text: "Désolé, je rencontre des difficultés de connexion. Veuillez réessayer dans quelques instants."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {/* Chat Icon */}
            <button
                className="fixed bottom-6 right-6 z-50 bg-accent text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:scale-110 transition-all"
                onClick={() => setOpen(true)}
                aria-label="Open chat"
                style={{ display: open ? "none" : "flex" }}
            >
                <MessageCircle className="w-7 h-7" />
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 60 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] bg-background border border-primary/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b bg-accent/10">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-semibold text-accent">Assistant</span>
                            </div>
                            <button onClick={() => setOpen(false)} aria-label="Close chat">
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 flex flex-col gap-2 p-4 overflow-y-auto max-h-80" style={{ minHeight: 220 }}>
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                                            msg.sender === "user"
                                                ? "bg-accent text-white rounded-br-none"
                                                : "bg-muted text-foreground rounded-bl-none"
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-muted rounded-lg rounded-bl-none px-3 py-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="flex gap-2 p-4 border-t">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                disabled={isLoading}
                                className="flex-1"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={isLoading || !input.trim()}
                                className="bg-accent text-white"
                            >
                                <Send className="h-5 w-5" />
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;

