import React from 'react'
import { Box, Typography } from '@mui/material'
import TodoStatus from '../../components/TodoStatus'
import PeopleIcon from '@mui/icons-material/People'
import ItemContainer from '../../components/ItemContainer'

const GroupListItem = ({ group, handleClick }) => {
    const color = group.color || '#ffffff'

    return (
        <ItemContainer
            onClick={() => handleClick(group.id)}
            color={color}
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
        </ItemContainer>
    )
}

export default GroupListItem