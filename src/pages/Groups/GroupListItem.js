import React from 'react'
import { Box, Typography } from '@mui/material'
import { LightenDarkenColor } from 'lighten-darken-color'
import TodoStatus from '../../components/TodoStatus'
import PeopleIcon from '@mui/icons-material/People'

const GroupListItem = ({ group, handleClick }) => {
    const color = group.color || '#ffffff'
    const darkerColor = LightenDarkenColor(color, -10)

    return (
        <Box
            onClick={() => handleClick(group.id)}
            sx={{
                backgroundColor: color,
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                '&:hover': {
                    backgroundColor: darkerColor
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    sx={{ fontWeight: 'bold' }}
                >{group.name}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <PeopleIcon fontSize='small' />
                    <Typography
                        sx={{ marginLeft: 0.3, fontSize: 15 }}
                    >
                        {group.users ? group.users.length : 0}
                    </Typography>
                </Box>
            </Box>
            <TodoStatus todos={group.todos} />
        </Box>
    )
}

export default GroupListItem