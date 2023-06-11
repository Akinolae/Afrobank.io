import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";
import Ui from "../ui";
import { useMemo } from "react";

const Box = styled.div``;

const trxType = {
  CREDIT: "CREDIT",
  DEBIT: "DEBIT",
};

const TransactionHistory: React.FC = () => {
  const transactions = useMemo(() => {
    return [
      {
        amount: "3000",
        desc: "food",
        type: trxType.CREDIT,
      },
      {
        amount: "3000",
        desc: "food",
        type: trxType.DEBIT,
      },
      {
        amount: "3000",
        desc: "food",
        type: trxType.DEBIT,
      },
      {
        amount: "3000",
        desc: "TRX-MAKINDE AKINOLA EMMANUEL Guranteeddd  jnakmnsknkin djend",
        type: trxType.DEBIT,
      },
    ];
  }, []);

  return (
    <>
      <Box className="flex justify-between items-center mt-[41px]">
        <Ui.Text
          text="Recent Activity"
          fontSize="20px"
          fontWeight={600}
          className="text-white"
        />
        <Ui.Text text="View all" className="text-white text-xs" />
      </Box>
      <Box className="mt-5 justify-between">
        {transactions.map((trx, i) => {
          return (
            <Box key={i} className="flex justify-between mt-5 w-full">
              <Box className="flex items-center">
                <Box
                  style={{
                    color: trx.type === trxType.CREDIT ? "green" : "red",
                    background:
                      trx.type === trxType.CREDIT ? "#B6FEE8" : "#FFDFE4",
                  }}
                  className="rounded w-[40px] h-[40px] flex justify-center items-center mr-4"
                >
                  {trx.type === trxType.CREDIT ? (
                    <Box>
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6767 23.9606L23.261 23.9606L23.261 15.3763M11.2402 11.9398L23.1408 23.8404"
                          stroke="#36AD85"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Box>
                  ) : (
                    <Box>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2316 9.52403L13.2316 0.939751L4.64732 0.939751M1.21078 12.9606L13.1114 1.05996"
                          stroke="#FF455D"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Box>
                  )}
                </Box>
                <Box>
                  <Ui.Text
                    style={{ width: "200px" }}
                    text={trx.desc}
                    className="text-white text-xs"
                  />
                </Box>
              </Box>
              <Box className="flex items-center mt-4">
                <Ui.Text
                  text={trx.amount}
                  style={{
                    color: trx.type === trxType.CREDIT ? "#237C18" : "#C91200",
                  }}
                  className="text-xs"
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default TransactionHistory;
