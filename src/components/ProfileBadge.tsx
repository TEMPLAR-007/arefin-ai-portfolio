import { Shield, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProfileBadgeProps {
  imageUrl?: string;
  name: string;
  verified?: boolean;
  title?: string;
}

const ProfileBadge = ({ 
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", 
  name, 
  verified = true,
  title = "Full Stack Developer"
}: ProfileBadgeProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 mb-8">
      {/* Profile Image */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/20">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        {verified && (
          <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1.5 shadow-lg">
            <CheckCircle className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
      </div>

      {/* Verified Badge */}
      {verified && (
        <Badge variant="secondary" className="bg-muted/80 text-muted-foreground border border-border/50">
          <Shield className="w-3 h-3 mr-1" />
          Verified Developer
        </Badge>
      )}
    </div>
  );
};

export default ProfileBadge;