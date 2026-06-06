'use client';
import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";

import React from 'react';


const UserTable = ({ users, deleteUserAction }) => {
    const handleDelete = async (userId) => {
        await deleteUserAction(userId);
    }
    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Role</Table.Column>
                            <Table.Column>Email</Table.Column>
                            <Table.Column>Action</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {users.map((user) => (
                                <Table.Row key={user._id}>
                                    <Table.Cell>{user.username}</Table.Cell>
                                    <Table.Cell>{user.role}</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>

                                    <Table.Cell className="flex items-center gap-2">
                                        <Link href={`/user/${user._id}`}>
                                            <Button variant="outline">View Details</Button>
                                        </Link>

                                        <Link href={`/user/${user._id}/edit`}>
                                            <Button variant="danger-soft">Edit</Button>
                                        </Link>

                                        
                                        <AlertDialog>
                                                <Button variant="danger">Delete</Button>
                                                <AlertDialog.Backdrop>
                                                    <AlertDialog.Container>
                                                        <AlertDialog.Dialog className="sm:max-w-100">
                                                            <AlertDialog.CloseTrigger />
                                                            <AlertDialog.Header>
                                                                <AlertDialog.Icon status="danger" />
                                                                <AlertDialog.Heading>Delete user permanently?</AlertDialog.Heading>
                                                            </AlertDialog.Header>
                                                            <AlertDialog.Body>
                                                                <p>
                                                                    This will permanently delete <strong>{user.username}</strong> and all of its
                                                                    data. This action cannot be undone.
                                                                </p>
                                                            </AlertDialog.Body>
                                                            <AlertDialog.Footer>
                                                                <Button slot="close" variant="outline">
                                                                    Cancel
                                                                </Button>
                                                                <Button onClick={() => handleDelete(user._id)} slot="close" variant="danger">
                                                                    Delete User
                                                                </Button>
                                                            </AlertDialog.Footer>
                                                        </AlertDialog.Dialog>
                                                    </AlertDialog.Container>
                                                </AlertDialog.Backdrop>
                                        </AlertDialog>
                                       

                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default UserTable;