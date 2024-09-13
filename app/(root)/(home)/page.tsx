"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Chart, CurrencyConvert, MySavings, Transactions } from "@/components";
import UserStatsCard from "@/components/userStatsCard/UserStatsCard";
// import { Item, UserStats } from "@/utils";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { UserStats } from "@/utils";
import { Item } from "@/types";

export default function Home() {
    const [user] = useAuthState(auth);
    const [userSession, setUserSession] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const session = sessionStorage.getItem("user");
        setUserSession(session);
        if (!user && !session) {
            router.push("/sign-up");
        }
    }, [user, router]);

    return (
        <div className="w-full 2xl:w-3/4">
            <Grid container spacing={{ xs: 2, sm: 2, md: 15 }} columns={{ xs: 2, sm: 8, md: 18 }}>
                {UserStats.map((stat, idx) => (
                    <Grid key={idx} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Item className="bg-transparent">
                            <UserStatsCard
                                name={stat.name}
                                value={stat.value}
                                color={stat.color}
                                percentage={stat.percentage}
                            />
                        </Item>
                    </Grid>
                ))}
            </Grid>
            
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1}>
                    <Grid size={8}>
                        <Item className="bg-transparent"><Chart /></Item>
                    </Grid>
                    <Grid size={4}>
                        <Item className="bg-transparent"><MySavings /></Item>
                    </Grid>
                    <Grid size={6}>
                        <Item className="bg-transparent"><CurrencyConvert /></Item>
                    </Grid>
                    <Grid size={6}>
                        <Item className="bg-transparent"><Transactions /></Item>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
}
