import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Iconify from 'src/components/iconify';
// hooks
// routes
// components
import {
  Avatar,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MotionViewport, varFade } from 'src/components/animate';
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import { formatDate } from '@fullcalendar/core';

/**
 * 
 * @returns {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
      current_price: 34554,
      market_cap: 672476434602,
      market_cap_rank: 1,
      fully_diluted_valuation: 723324419061,
      total_volume: 28995013405,
      high_24h: 35012,
      low_24h: 33466,
      price_change_24h: 496.55,
      price_change_percentage_24h: 1.45798,
      market_cap_change_24h: 8286657688,
      market_cap_change_percentage_24h: 1.24763,
      circulating_supply: 19523750.0,
      total_supply: 21000000.0,
      max_supply: 21000000.0,
      ath: 69045,
      ath_change_percentage: -49.9119,
      ath_date: '2021-11-10T14:24:11.849Z',
      atl: 67.81,
      atl_change_percentage: 50900.92167,
      atl_date: '2013-07-06T00:00:00.000Z',
      roi: null,
      last_updated: '2023-10-25T17:09:04.208Z',
    },
    {
      id: 'ethereum',
      symbol: 'eth',
      name: 'Ethereum',
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
      current_price: 1789.67,
      market_cap: 215059899293,
      market_cap_rank: 2,
      fully_diluted_valuation: 215059899293,
      total_volume: 17227559339,
      high_24h: 1813.89,
      low_24h: 1759.15,
      price_change_24h: 1.56,
      price_change_percentage_24h: 0.08704,
      market_cap_change_24h: 357852742,
      market_cap_change_percentage_24h: 0.16667,
      circulating_supply: 120262637.950973,
      total_supply: 120262637.950973,
      max_supply: null,
      ath: 4878.26,
      ath_change_percentage: -63.3886,
      ath_date: '2021-11-10T14:24:19.604Z',
      atl: 0.432979,
      atl_change_percentage: 412391.18127,
      atl_date: '2015-10-20T00:00:00.000Z',
      roi: {
        times: 68.28493014078553,
        currency: 'btc',
        percentage: 6828.493014078553,
      },
      last_updated: '2023-10-25T17:09:01.633Z',
    },
    {
      id: 'tether',
      symbol: 'usdt',
      name: 'Tether',
      image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661',
      current_price: 0.999695,
      market_cap: 84303157341,
      market_cap_rank: 3,
      fully_diluted_valuation: 84303157341,
      total_volume: 52310082110,
      high_24h: 1.003,
      low_24h: 0.996585,
      price_change_24h: -0.000673442286818427,
      price_change_percentage_24h: -0.06732,
      market_cap_change_24h: 126387214,
      market_cap_change_percentage_24h: 0.15015,
      circulating_supply: 84256686740.4636,
      total_supply: 84256686740.4636,
      max_supply: null,
      ath: 1.32,
      ath_change_percentage: -24.42735,
      ath_date: '2018-07-24T00:00:00.000Z',
      atl: 0.572521,
      atl_change_percentage: 74.64829,
      atl_date: '2015-03-02T00:00:00.000Z',
      roi: null,
      last_updated: '2023-10-25T17:05:00.307Z',
    },
    {
      id: 'binancecoin',
      symbol: 'bnb',
      name: 'BNB',
      image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970',
      current_price: 224.53,
      market_cap: 34431387843,
      market_cap_rank: 4,
      fully_diluted_valuation: 44757896052,
      total_volume: 566695653,
      high_24h: 228.74,
      low_24h: 222.89,
      price_change_24h: -0.9823104792019421,
      price_change_percentage_24h: -0.4356,
      market_cap_change_24h: -210391916.60772705,
      market_cap_change_percentage_24h: -0.60734,
      circulating_supply: 153856150.0,
      total_supply: 153856150.0,
      max_supply: 200000000.0,
      ath: 686.31,
      ath_change_percentage: -67.31971,
      ath_date: '2021-05-10T07:24:17.097Z',
      atl: 0.0398177,
      atl_change_percentage: 563184.70677,
      atl_date: '2017-10-19T00:00:00.000Z',
      roi: null,
      last_updated: '2023-10-25T17:09:00.933Z',
    },
    {
      id: 'ripple',
      symbol: 'xrp',
      name: 'XRP',
      image:
        'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442',
      current_price: 0.552932,
      market_cap: 29558487876,
      market_cap_rank: 5,
      fully_diluted_valuation: 55310478340,
      total_volume: 1549199950,
      high_24h: 0.56362,
      low_24h: 0.54241,
      price_change_24h: -0.005318395820866351,
      price_change_percentage_24h: -0.95269,
      market_cap_change_24h: -246774788.90284348,
      market_cap_change_percentage_24h: -0.82796,
      circulating_supply: 53441027384.0,
      total_supply: 99988362642.0,
      max_supply: 100000000000.0,
      ath: 3.4,
      ath_change_percentage: -83.75808,
      ath_date: '2018-01-07T00:00:00.000Z',
      atl: 0.00268621,
      atl_change_percentage: 20448.44233,
      atl_date: '2014-05-22T00:00:00.000Z',
      roi: null,
      last_updated: '2023-10-25T17:09:01.060Z',
    },
    {
      id: 'usd-coin',
      symbol: 'usdc',
      name: 'USDC',
      image: 'https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
      current_price: 1.002,
      market_cap: 24983314912,
      market_cap_rank: 6,
      fully_diluted_valuation: 24983253349,
      total_volume: 10180964787,
      high_24h: 1.004,
      low_24h: 0.996917,
      price_change_24h: 0.00124858,
      price_change_percentage_24h: 0.12473,
      market_cap_change_24h: -285197545.62693405,
      market_cap_change_percentage_24h: -1.12867,
      circulating_supply: 25031170387.3901,
      total_supply: 25031108706.5149,
      max_supply: null,
      ath: 1.17,
      ath_change_percentage: -14.81646,
      ath_date: '2019-05-08T00:40:28.300Z',
      atl: 0.877647,
      atl_change_percentage: 13.82174,
      atl_date: '2023-03-11T08:02:13.981Z',
      roi: null,
      last_updated: '2023-10-25T17:09:00.509Z',
    },
    {
      id: 'staked-ether',
      symbol: 'steth',
      name: 'Lido Staked Ether',
      image: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206',
      current_price: 1783.46,
      market_cap: 15702791975,
      market_cap_rank: 7,
      fully_diluted_valuation: 15702791975,
      total_volume: 12881832,
      high_24h: 1810.82,
      low_24h: 1758.65,
      price_change_24h: -1.0356420639943735,
      price_change_percentage_24h: -0.05804,
      market_cap_change_24h: 59211058,
      market_cap_change_percentage_24h: 0.3785,
      circulating_supply: 8785734.66606065,
      total_supply: 8785882.63203595,
      max_supply: 8785734.66606065,
      ath: 4829.57,
      ath_change_percentage: -63.0804,
      ath_date: '2021-11-10T14:40:47.256Z',
      atl: 482.9,
      atl_change_percentage: 269.24254,
      atl_date: '2020-12-22T04:08:21.854Z',
      roi: null,
      last_updated: '2023-10-25T17:08:44.804Z',
    },
    {
      id: 'solana',
      symbol: 'sol',
      name: 'Solana',
      image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756',
      current_price: 32.53,
      market_cap: 13643104502,
      market_cap_rank: 8,
      fully_diluted_valuation: 18309795635,
      total_volume: 1648024802,
      high_24h: 33.61,
      low_24h: 29.77,
      price_change_24h: 1.62,
      price_change_percentage_24h: 5.23179,
      market_cap_change_24h: 750567612,
      market_cap_change_percentage_24h: 5.82172,
      circulating_supply: 417813623.024188,
      total_supply: 560728831.916066,
      max_supply: null,
      ath: 259.96,
      ath_change_percentage: -87.52585,
      ath_date: '2021-11-06T21:54:35.825Z',
      atl: 0.500801,
      atl_change_percentage: 6375.16794,
      atl_date: '2020-05-11T19:35:23.449Z',
      roi: null,
      last_updated: '2023-10-25T17:09:02.398Z',
    },
    {
      id: 'cardano',
      symbol: 'ada',
      name: 'Cardano',
      image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090',
      current_price: 0.282778,
      market_cap: 9845595521,
      market_cap_rank: 9,
      fully_diluted_valuation: 12689516907,
      total_volume: 252460470,
      high_24h: 0.289201,
      low_24h: 0.27459,
      price_change_24h: 0.00316891,
      price_change_percentage_24h: 1.13334,
      market_cap_change_24h: 110219138,
      market_cap_change_percentage_24h: 1.13215,
      circulating_supply: 34914788460.1883,
      total_supply: 45000000000.0,
      max_supply: 45000000000.0,
      ath: 3.09,
      ath_change_percentage: -90.8423,
      ath_date: '2021-09-02T06:00:10.474Z',
      atl: 0.01925275,
      atl_change_percentage: 1368.30969,
      atl_date: '2020-03-13T02:22:55.044Z',
      roi: null,
      last_updated: '2023-10-25T17:08:58.081Z',
    },
    {
      id: 'dogecoin',
      symbol: 'doge',
      name: 'Dogecoin',
      image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409',
      current_price: 0.066576,
      market_cap: 9417105534,
      market_cap_rank: 10,
      fully_diluted_valuation: 9417088903,
      total_volume: 576754108,
      high_24h: 0.068222,
      low_24h: 0.065024,
      price_change_24h: 0.00028968,
      price_change_percentage_24h: 0.43701,
      market_cap_change_24h: 45260260,
      market_cap_change_percentage_24h: 0.48294,
      circulating_supply: 141559296383.705,
      total_supply: 141559046383.705,
      max_supply: null,
      ath: 0.731578,
      ath_change_percentage: -90.90199,
      ath_date: '2021-05-08T05:08:23.458Z',
      atl: 8.69e-5,
      atl_change_percentage: 76489.39189,
      atl_date: '2015-05-06T00:00:00.000Z',
      roi: null,
      last_updated: '2023-10-25T17:08:58.231Z',
    },
 */

export default function CryptoTable() {
  const [moedas, setMoedas] = useState([]);

  //function to get the data from the api each 1 seconds
  const gettData = async () => {
    const result = await axios.get(
      'https://api.investing.com/api/financialdata/homepage/major-currencies?limit=10'
    );
    setMoedas(result.data.data);
  };

  useEffect(() => {
    gettData();
    const interval = setInterval(() => {
      gettData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'center',
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            color: '#0e0f0c',
          }}
        >
          Ve el cambio de las divisas
        </Typography>
      </m.div>
    </Stack>
  );

  return (
    <Box
      sx={{
        bgcolor: '#edefeb',
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 5, md: 10 },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 0 }}
        >
          <Grid xs={12} md={12}>
            {renderDescription}
          </Grid>

          <Grid xs={12} sx={{ textAlign: 'center' }}>
            <m.div variants={varFade().inDown}>
              <TableContainer
                sx={{
                  mt: 3,
                  boxShadow: '20px 0 30px rgba(0,0,0,.08)',
                  borderRadius: '20px',
                  border: '1px solid #f3f3f3',
                  overflow: 'hidden',
                  background: '#ffffff',
                }}
              >
                <Scrollbar>
                  <Table sx={{ minWidth: 800 }}>
                    <TableHeadCustom
                      headLabel={[
                        { id: 'Nombre', label: 'Nombre', align: 'left' },
                        { id: 'Compra', label: 'Compra', align: 'right' },
                        { id: 'Venta', label: 'Venta', align: 'right' },
                        { id: 'Máximo', label: 'Máximo', align: 'right' },
                        { id: 'Mínimo', label: 'Mínimo', align: 'right' },
                        { id: 'Var', label: 'Var.', align: 'right' },
                        { id: 'Var2', label: '% Var.', align: 'right' },
                      ]}
                    />

                    <TableBody>
                      {moedas.map((row) => (
                        <TableRow key={row.PairName}>
                          <TableCell>
                            <Grid container alignItems="start" justifyContent="start" spacing={2}>
                              <Grid>
                                <TableCell
                                  align="right"
                                  sx={{
                                    p: 0,
                                  }}
                                >
                                  {row.ChgPct < 0 ? (
                                    //arrow red down
                                    <Iconify
                                      icon={`bi:arrow-down`}
                                      width={20}
                                      sx={{ color: '#ff0000' }}
                                    />
                                  ) : (
                                    //arrow green up
                                    <Iconify
                                      icon={`bi:arrow-up`}
                                      width={20}
                                      sx={{ color: '#00ff00' }}
                                    />
                                  )}
                                </TableCell>
                              </Grid>
                              <Grid>
                                <Typography variant="body2">{row.PairName}</Typography>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body2">{row.Ask}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body2">{row.Bid}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body2">{row.High}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body2">{row.Low}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            {row.Chg < 0 ? (
                              <Typography variant="body2" sx={{ color: '#ff0000' }}>
                                {row.Chg.toFixed(2)}
                              </Typography>
                            ) : (
                              <Typography variant="body2" sx={{ color: '#00ff00' }}>
                                {' '}
                                {row.Chg.toFixed(2)}
                              </Typography>
                            )}
                          </TableCell>
                          <TableCell align="right">
                            {row.ChgPct < 0 ? (
                              <Typography variant="body2" sx={{ color: '#ff0000' }}>
                                {row.ChgPct.toFixed(2)}%
                              </Typography>
                            ) : (
                              <Typography variant="body2" sx={{ color: '#00ff00' }}>
                                {' '}
                                {row.ChgPct.toFixed(2)}%
                              </Typography>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Scrollbar>
              </TableContainer>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
