import { useState } from "react";
import { Share2, Copy, Check, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const portfolioUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = "Check out Ragni Kumari's amazing portfolio! 🚀";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      setCopied(true);
      toast({
        title: "Link Copied!",
        description: "Portfolio URL copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the URL manually",
        variant: "destructive",
      });
    }
  };

  const shareOptions = [
    {
      label: "Copy Link",
      icon: copied ? Check : Copy,
      onClick: handleCopyLink,
      className: copied ? "text-neon-green" : "",
    },
    {
      label: "Twitter",
      icon: Twitter,
      onClick: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(portfolioUrl)}`,
          "_blank"
        );
      },
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      onClick: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`,
          "_blank"
        );
      },
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      onClick: () => {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${shareText} ${portfolioUrl}`)}`,
          "_blank"
        );
      },
    },
    {
      label: "Email",
      icon: Mail,
      onClick: () => {
        window.location.href = `mailto:?subject=${encodeURIComponent("Check out this portfolio")}&body=${encodeURIComponent(`${shareText}\n\n${portfolioUrl}`)}`;
      },
    },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ragni Kumari - Portfolio",
          text: shareText,
          url: portfolioUrl,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-neon-purple/30 text-muted-foreground hover:border-neon-purple hover:text-neon-purple hover:shadow-neon-purple transition-all"
          data-cursor="Share"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black/95 border-neon-cyan/30 backdrop-blur-md min-w-[200px]"
      >
        {navigator.share && (
          <DropdownMenuItem
            onClick={handleNativeShare}
            className="text-foreground hover:bg-neon-cyan/10 hover:text-neon-cyan focus:bg-neon-cyan/10 focus:text-neon-cyan cursor-pointer"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share via...
          </DropdownMenuItem>
        )}
        {shareOptions.map((option) => {
          const Icon = option.icon;
          return (
            <DropdownMenuItem
              key={option.label}
              onClick={option.onClick}
              className={`text-foreground hover:bg-neon-cyan/10 hover:text-neon-cyan focus:bg-neon-cyan/10 focus:text-neon-cyan cursor-pointer ${option.className}`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {option.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

