import {Button} from '@/components/ui/button';
import {Card} from "antd";
import {CardContent} from "@/components/ui/card.tsx";
import { useToast } from "../../hooks/use-toast"

interface ErrorCardProps {
    message: string;
    onRetry: () => void;
}

const ErrorCard = ({ message, onRetry }: ErrorCardProps) => {
    const { toast } = useToast()

    const handleRetry = () => {
        onRetry()
        toast({
            title: "Success",
            description: "Operation completed successfully",
        })
    }

    return (
        <div className="container py-8">
            <Card>
                <CardContent className="p-6">
                    <p className="text-red-500">{message}</p>
                    <Button onClick={handleRetry} className="mt-4">
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default ErrorCard;
