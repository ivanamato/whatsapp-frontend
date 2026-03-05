export function getAvatarInitials(contactName?: string, phoneNumber?: string): string {
  if (contactName) {
    const words = contactName.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return contactName.slice(0, 2).toUpperCase();
  }

  if (phoneNumber) {
    const digits = phoneNumber.replace(/\D/g, '');
    return digits.slice(-2);
  }

  return '??';
}
