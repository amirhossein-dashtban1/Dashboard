import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ToggleButton } from "@mui/material";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { Grid } from "@mui/material";

export default function Index() {
	const theme = useTheme();
	const onlySmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	// const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
	// const onlyLargeScreen = useMediaQuery(theme.breakpoints.down("md"));
	const colors = theme.palette;

	const [openDrawer, setOpenDrawer] = React.useState(false);

	// const toggleDrawer = (newOpen) => () => {
	// 	setOpen(newOpen);
	// };

	//onClick={toggleDrawer(false)}

	const DrawerList = (
		<Box
			sx={{
				height: "100vh",
				width: 250,
				background: colors.background.default,
			}}
			role='presentation'>
			<List sx={{ padding: 0 }}>
				{["Dashboard", "Starred", "Send email", "Drafts"].map(
					(text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton selected={true}>
								<ListItemIcon>
									{index % 2 === 0 ? (
										<HomeIcon />
									) : (
										<MailIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					)
				)}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	console.log(theme);

	const StyledButton = styled(Button)(({}) => ({
		":hover": {
			backgroundColor: colors.button.primary,
		},
	}));

	const card = (
		<React.Fragment>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color='text.primary'
					gutterBottom>
					Word of the Day
				</Typography>

				<Typography sx={{ mb: 1.5 }} color='text.secondary'>
					adjective
				</Typography>

				<Typography variant='body2'>
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
		</React.Fragment>
	);
	return (
		<Box sx={{ width: 1, position: "relative" }} display={`flex`}>
			<Box
				sx={{
					display: { xs: "block", md: "none" },
					height: "100vh",
				}}>
				<ToggleButton
					size='small'
					value='check'
					sx={{ border: "none" }}

					// selected={selected}
				>
					<MenuIcon
						fontSize='large'
						sx={{ zIndex: 1000 }}
						onClick={() => {
							setOpenDrawer(true);
						}}
					/>
				</ToggleButton>
				{/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
				<Drawer
					open={openDrawer}
					onClose={() => {
						setOpenDrawer(false);
					}}>
					{DrawerList}
				</Drawer>
			</Box>

			<Box
				component='section'
				sx={{
					width: "25%",
					maxWidth: "25%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					display: { xs: "none", md: "flex" },
				}}>
				<Box sx={{ padding: "4rem 2rem" }}>
					<List>
						{["Dashboard", "Starred", "Send email", "Drafts"].map(
							(text, index) => (
								<ListItem key={text} disablePadding>
									<ListItemButton>
										<ListItemIcon>
											{index % 2 === 0 ? (
												<HomeIcon
													fontSize='large'
													sx={{
														color: colors.text
															.primary,
													}}
												/>
											) : (
												<MailIcon
													fontSize='large'
													sx={{
														color: colors.text
															.primary,
													}}
												/>
											)}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							)
						)}
					</List>
				</Box>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "4rem 2rem",
					}}>
					<StyledButton
						sx={{
							background: colors.button.primary,
							color: colors.button.primaryText,
							width: "100%",
						}}>
						New Transaction
					</StyledButton>
				</Box>
			</Box>

			<Box
				component={"section"}
				sx={{
					width: [1, 1, 1, 1, 1],
					position: onlySmallScreen ? "absolute" : null,
					padding: "4rem 2rem",
				}}>
				<Grid
					container
					direction='row'
					justifyContent='space-around'
					alignItems='center'
					spacing={{ xs: 2, sm: 2, md: 2, lg: 0, xl: 1 }}
					columns={{ xs: 3, sm: 2.8, md: 4, lg: 5, xl: 6 }}
					sx={{}}>
					{[1, 1, 1, 1].map((_, index) => {
						return (
							<Grid
								key={index}
								item
								xs={2}
								sm={0.7}
								md={1}
								lg={1}
								xl={1}>
								<Card
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: colors.background.default,
										border: `2px solid ${colors.border.primary}`,
									}}
									variant='contained'>
									{card}
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Box>

			<Box>
				<Box></Box>

				<Box></Box>
			</Box>
		</Box>
	);
}
