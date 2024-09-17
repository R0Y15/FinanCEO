// @ts-nocheck
"use client";

import { Chart, CurrencyConvert, LogoutBtn, MySavings, Transactions } from "@/components";
import UserStatsCard from "@/components/userStatsCard/UserStatsCard";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { UserStats } from "@/utils";
import { Item } from "@/types";

export default function Home() {
    return (
        <div className="w-full 2xl:w-3/4">
            <Grid container spacing={{ xs: 2, sm: 2, md: 15 }} columns={{ xs: 2, sm: 8, md: 18 }}>
                {UserStats.map((stat, idx) => (
                    <Grid key={idx} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Item className="dark:bg-[#121212]">
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
                        <Item className="dark:bg-[#121212]"><Chart /></Item>
                    </Grid>
                    <Grid size={4}>
                        <Item className="dark:bg-[#121212]"><MySavings /></Item>
                    </Grid>
                    <Grid size={6}>
                        <Item className="dark:bg-[#121212]"><CurrencyConvert /></Item>
                    </Grid>
                    <Grid size={6}>
                        <Item className="dark:bg-[#121212] h-56 overflow-hidden"><Transactions component /></Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
