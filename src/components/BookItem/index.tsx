import React from 'react';
import {Book} from '../../state/book/interface';
import {View, Text, Button} from '../';
import styles from './styles';

interface Props {
  item: Book
}

const BookItem:React.FC<Props> = ({item}) => (
	<View style={styles.container}>
		<Text style={styles.title}>{item.title}</Text>
		<Text style={styles.author}>{`Author: ${item.author}`}</Text>
		<Text style={styles.description}>{`Description: ${item.description}`}</Text>
		<Button text="add to shoplist" />
	</View>
);

export default BookItem;
