import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * A loading button
 * @description A loading button that shows a loading spinner while it is loading
 */
function LoadingButton() {
  return (
    <Button disabled>
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Loading
    </Button>
  );
}

export default LoadingButton;
