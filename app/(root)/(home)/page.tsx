// @ts-nocheck
"use client";

import { Chart, CurrencyConvert, LogoutBtn, MySavings, Transactions } from "@/components";
import UserStatsCard from "@/components/userStatsCard";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { UserStats } from "@/utils";
import { Item } from "@/types";

export default function Home() {
    return (

        <section className="flex w-full 2xl:w-2/3">
            <div className="flex flex-col w-full mx-5 gap-5">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                    {UserStats.map((stat, idx) => (
                        <div key={idx} className="dark:bg-[#121212]">
                            <UserStatsCard
                                name={stat.name}
                                value={stat.value}
                                color={stat.color}
                                percentage={stat.percentage}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-5 justify-between items-center md:mr-6 ">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
                        <div className="dark:bg-[#121212] hidden md:block"><Chart /></div>
                        <div className="dark:bg-[#121212] w-full"><MySavings /></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
                        <div className="dark:bg-[#121212]"><CurrencyConvert /></div>
                        <div className="dark:bg-[#121212]"><Transactions component /></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
