import { useQuery } from '@apollo/client';
import { Box, Text, Flex, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { QUERY_REVIEWS } from '../utils/queries';

const MotionBox = motion(Box);

const Reviews = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviewList = data?.reviews || [];

  if (loading) return <Spinner size="xl" />;

  return (
    <Box
      position="relative"
      overflow="hidden"
      height="150px" 
      bg="gray.100"
      p={4}
      mt={6} 
      pb={6} 
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        See What Our Clients Say About Us
      </Text>
      <MotionBox
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
        whiteSpace="nowrap"
      >
        <Flex>
          {reviewList.map((review) => (
            <Box key={review._id} mx={4} p={4} borderWidth="1px" borderRadius="lg" bg="white">
              <Text fontStyle="italic" color="gray.700">
                "{review.comment}"
              </Text>
              <Flex mt={2} justify="space-between">
                <Text fontWeight="bold">
                  {review.user.username} 
                </Text>
                <Text fontSize="smaller" color="gray.500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default Reviews;
