"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { translate } from "@/apis/translation";
import { Button } from "./ui/button";

export function MirrorNotice() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>

            </DialogTrigger>
            <DialogContent className="font-geist">
                <DialogHeader>
                    <DialogTitle className="text-lg!">{translate("frontend.mirror_notice.title")}</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground">{translate("frontend.mirror_notice.line1")}</p>
                <p className="text-muted-foreground">{translate("frontend.mirror_notice.line2")}</p>
                <div className="flex flex-col gap-2 text-sm">
                    <span className="text-muted-foreground">{translate("frontend.mirror_notice.line3")}</span>
                    <code className="bg-input/30 px-2 py-1 rounded font-mono text-foreground">{`cd app && python main.py`}</code>
                    <span className="text-muted-foreground">{translate("frontend.mirror_notice.line4")}</span>
                    <code className="bg-input/30 px-2 py-1 rounded font-mono text-foreground break-all">{`cd app && python main.py --frontend-url https://app.ets2la.com`}</code>
                </div>
                <div className="flex gap-2">
                    <Button variant={"outline"} className="bg-input/20 max-w-full grow" onClick={
                        () => {
                            setIsOpen(false);
                        }
                    }>
                        {translate("frontend.mirror_notice.ok")}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
