import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCard extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({ skill, ...props }: SkillCard) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7} {...props}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 22,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
