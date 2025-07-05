'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from '@/components/ui/dialog';
import {RadioGroup, RadioGroupItem} from './radio-group';
import {Label} from './label.tsx';
import {Input} from './input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from '@/components/ui/select';
import {toast} from 'sonner';
import ethereumIcon from '@/assets/icons/crypto.png';

type DiscoveryOption = 'Social Media' | "Friend's Recommendation" | 'Other';

export function PostSignupDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [discoveryOption, setDiscoveryOption] =
    useState<DiscoveryOption | null>(null);
  const [friendEmail, setFriendEmail] = useState('');
  const [socialMedia, setSocialMedia] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      // If the user selected "Friend's Recommendation", send the referral to the backend
      if (discoveryOption === "Friend's Recommendation" && friendEmail) {
        // Placeholder for the removed useReferralMutation
      }

      // Here you would typically send the other data to your backend for analytics
      console.log({ discoveryOption, friendEmail, socialMedia });
    } catch (error) {
      console.error('Error submitting referral:', error);
      toast.error('Error', {
        description:
          'There was a problem processing your submission. Please try again.',
      });
    }
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome! We'd love to know more</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>How did you discover our app?</p>
          <RadioGroup
            value={discoveryOption || ''}
            onValueChange={(value) =>
              setDiscoveryOption(value as DiscoveryOption)
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Social Media" id="social-media" />
              <Label htmlFor="social-media">Social Media</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Friend's Recommendation" id="friend" />
              <Label htmlFor="friend">Friend's Recommendation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>

          {discoveryOption === "Friend's Recommendation" && (
            <div className="space-y-2">
              <Label htmlFor="friend-email">
                Please enter your friend's email address:
              </Label>
              <Input
                id="friend-email"
                type="email"
                placeholder="friend@example.com"
                value={friendEmail}
                onChange={(e) => setFriendEmail(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                If your friend is already a user, they'll receive 5{' '}
                <img
                  src={ethereumIcon}
                  alt="Ethereum"
                  className="inline h-4 w-4"
                />{' '}
                as a thank you!
              </p>
            </div>
          )}

          {discoveryOption === 'Social Media' && (
            <div className="space-y-2">
              <Label htmlFor="social-media-platform">Which platform?</Label>
              <Select value={socialMedia || ''} onValueChange={setSocialMedia}>
                <SelectTrigger id="social-media-platform">
                  <SelectValue placeholder="Select a platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Skip
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={
              !discoveryOption ||
              (discoveryOption === "Friend's Recommendation" &&
                !isEmailValid(friendEmail)) ||
              (discoveryOption === 'Social Media' && !socialMedia)
            }
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
