import Typography from "@/components/design-system/Typography";
import { WalletButton } from "@/components/solana/SolanaProvider";

export default function Page() {
  return (
    <div>
      <Typography variant="h1" level="0">
        Hello there! Hello World!
      </Typography>
      <WalletButton />
    </div>
  );
}
